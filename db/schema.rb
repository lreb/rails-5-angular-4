# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180222230321) do

  create_table "todos", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_accounts", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "password_reminder_token"
    t.datetime "password_reminder_expire"
    t.string "email_confirmation_token"
    t.boolean "account_confirmed", default: false
    t.boolean "account_active", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
