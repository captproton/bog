class AddExtrasToAmenityGroup < ActiveRecord::Migration
  def change
    add_column :amenity_groups, :hot_tub, :boolean
    add_column :amenity_groups, :washer, :boolean
    add_column :amenity_groups, :pool, :boolean
    add_column :amenity_groups, :dryer, :boolean
    add_column :amenity_groups, :breakfast, :boolean
    add_column :amenity_groups, :free_parking_on_premisis, :boolean
    add_column :amenity_groups, :gym, :boolean
    add_column :amenity_groups, :elevator_in_building, :boolean
    add_column :amenity_groups, :indoor_fireplace, :boolean
    add_column :amenity_groups, :buzzer_wireless_intercom, :boolean
    add_column :amenity_groups, :doorman, :boolean
    add_column :amenity_groups, :shampoo, :boolean
  end
end
