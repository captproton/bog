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

ActiveRecord::Schema.define(version: 20150331000030) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amenity_groups", force: :cascade do |t|
    t.integer  "space_id"
    t.boolean  "essentials"
    t.boolean  "tv"
    t.boolean  "cable_tv"
    t.boolean  "air_condition"
    t.boolean  "heating"
    t.boolean  "kitchen"
    t.boolean  "internet"
    t.boolean  "wireless_internet"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.boolean  "hot_tub"
    t.boolean  "washer"
    t.boolean  "pool"
    t.boolean  "dryer"
    t.boolean  "breakfast"
    t.boolean  "free_parking_on_premisis"
    t.boolean  "gym"
    t.boolean  "elevator_in_building"
    t.boolean  "indoor_fireplace"
    t.boolean  "buzzer_wireless_intercom"
    t.boolean  "doorman"
    t.boolean  "shampoo"
    t.boolean  "family_kid_friendly"
    t.boolean  "smoking_allowed"
    t.boolean  "suitable_for_events"
    t.boolean  "pets_allowed"
    t.boolean  "pets_live_on_property"
    t.boolean  "dog"
    t.boolean  "cat"
    t.boolean  "other_pet"
    t.boolean  "wheelchair_accessible"
    t.boolean  "smoke_detector"
    t.boolean  "carbon_monoxide_detector"
    t.boolean  "first_aid_kit"
    t.boolean  "safety_card"
    t.boolean  "fire_extinguisher"
  end

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
    t.float    "latitude"
    t.float    "longitude"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
