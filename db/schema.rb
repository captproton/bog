# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150309222857) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "photos", force: :cascade do |t|
    t.string   "title"
    t.string   "image"
    t.boolean  "image_processed"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "space_id"
  end

  create_table "spaces", force: :cascade do |t|
    t.string   "title"
    t.text     "summary"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.datetime "pubdate"
    t.string   "status"
    t.string   "calendar_frequency"
    t.integer  "listing_weekly_price_native"
    t.integer  "bedrooms"
    t.integer  "beds"
    t.integer  "bathrooms"
    t.string   "bed_style"
    t.string   "home_style"
    t.string   "room_style"
    t.integer  "person_capacity"
    t.text     "directions"
    t.string   "country_code"
    t.text     "street_address"
    t.string   "apt_ste_bld"
    t.string   "city"
    t.string   "state"
    t.string   "postal_code"
  end

end
