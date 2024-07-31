terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.51.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone
}

# Create VPC Network
resource "google_compute_network" "vpc_network" {
  name = var.vpc_network
}

# Create VM Instance
resource "google_compute_instance" "vm_instance" {
  name         = var.vm_instance
  machine_type = var.machine_type
  tags = [
    "allow-ssh",
    "allow-http",
    "allow-https",
    "allow-3000"
  ]

  # Add ssh keys
  metadata = {
    ssh-keys = "${var.ssh_username}:${var.ssh_pub_key}"
  }

  # Operating System
  boot_disk {
    initialize_params {
      image = var.boot_disk
    }
  }

  # Network setting
  network_interface {
    network = google_compute_network.vpc_network.name
    access_config {
      nat_ip = google_compute_address.static.address
    }
  }
}

# Create Firewall Rules
resource "google_compute_firewall" "ssh-rule" {
  name    = "allow-ssh"
  network = google_compute_network.vpc_network.name
  allow {
    protocol = "tcp"
    ports    = ["22"]
  }
  target_tags   = ["allow-ssh"]
  source_ranges = ["0.0.0.0/0"]
}
resource "google_compute_firewall" "http-rule" {
  name    = "allow-http"
  network = google_compute_network.vpc_network.name
  allow {
    protocol = "tcp"
    ports    = ["80"]
  }
  target_tags   = ["allow-http"]
  source_ranges = ["0.0.0.0/0"]
}
resource "google_compute_firewall" "https-rule" {
  name    = "allow-https"
  network = google_compute_network.vpc_network.name
  allow {
    protocol = "tcp"
    ports    = ["443"]
  }
  target_tags   = ["allow-https"]
  source_ranges = ["0.0.0.0/0"]
}
resource "google_compute_firewall" "port-3000-rule" {
  name    = "allow-3000"
  network = google_compute_network.vpc_network.name
  allow {
    protocol = "tcp"
    ports    = ["3000"]
  }
  target_tags   = ["allow-3000"]
  source_ranges = ["0.0.0.0/0"]
}

# Reserve Static IP Address
resource "google_compute_address" "static" {
  name = "ipv4-address"
}

# Create DNS Record
resource "google_dns_record_set" "terraform-learn" {
  name = "${var.dns_record_name}.${var.domain_name}"
  type = "A"
  ttl  = 300

  managed_zone = var.managed_zone_name

  rrdatas = [google_compute_instance.vm_instance.network_interface[0].access_config[0].nat_ip]
}