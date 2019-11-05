variable "aws_region" {
  default = "us-west-1"
}

variable "site_name" {
  description = "frontend pharamacies region metropolitana"
}

variable "aws_access_key" {
  default = "access_key"
}

variable "aws_secret_key" {
  default = "secret_key"
}

provider "aws" {
  access_key = "${var.aws_access_key}"
  secret_key = "${var.aws_secret_key}"
  region = "${var.aws_region}"
}