variable "project_id" {
  type = string
}

variable "region" {
  type    = string
  default = "us-west1"
}

variable "zone" {
  type    = string
  default = "us-west1-a"
}

variable "vpc_network" {
  type    = string
  default = "movies-catalog-network"
}

variable "vm_instance" {
  type    = string
  default = "movies-catalog-instance"
}

variable "machine_type" {
  type    = string
  default = "f1-micro"
}

variable "ssh_username" {
  type = string
}

variable "ssh_pub_key" {
  type = string
}

variable "boot_disk" {
  type    = string
  default = "cos-cloud/cos-113-lts"
}

variable "domain_name" {
  type = string
}

variable "dns_record_name" {
  type = string
}

variable "managed_zone_name" {
  type = string
}