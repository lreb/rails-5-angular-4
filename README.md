# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

*Migrations
rails g model UserAccount email:string password_digest:string password_reminder_token:string password_reminder_expire:timestamp email_confirmation_token:string account_confirmed:boolean  account_active:boolean