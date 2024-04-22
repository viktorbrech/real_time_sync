# CRM Card Demo: Real-Time Domain Status

This is a very simple CRM Card, to be displayed on company record pages. It is derived from the "Getting Started" project for HubSpot developer projects. It contains a private app, a CRM card written in React, and a serverless function that the CRM card is able to interact with. The serverless function calls an external data source to get the "status" of the company record's domain, based on its "domain" property value.

The purpose of this app is to demonstrate a very simple use of real-time data synchronization.

## Requirements

To install the project via the CLI, you need to have the HS CLI installed and authenticated to a HS portal with access to developer project.

To install via the HS Developer Project integration with Github, you need a github.com account.

## Usage

The HubSpot CLI enables you to run this project locally so that you may test and iterate quickly. Getting started is simple, just run this HubSpot CLI command in your project directory and follow the prompts:

`hs project dev`

Alternatively, you can add this project to your HubSpot portal via the Developer Project's Github integration.
