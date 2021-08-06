terraform {
  backend "s3" {
    bucket         = "fmp-react-devops-tfstate"
    key            = "fmp-react.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "fmp-react-devops-tf-state-lock"
  }
}

provider "aws" {
  region  = "us-east-1"
  version = "~> 2.54.0"
}


variable prefix {
  default     = "fmp-react"
  description = "prefix for name of app"
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
}

resource "aws_s3_bucket" "react_app" {
  bucket        = "${local.prefix}-app"
  acl           = "public-read"
  force_destroy = true
  policy        = file("./templates/s3/react-app-role.json")
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}