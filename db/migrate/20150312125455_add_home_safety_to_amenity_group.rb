class AddHomeSafetyToAmenityGroup < ActiveRecord::Migration
  def change
    add_column :amenity_groups, :smoke_detector, :boolean
    add_column :amenity_groups, :carbon_monoxide_detector, :boolean
    add_column :amenity_groups, :first_aid_kit, :boolean
    add_column :amenity_groups, :safety_card, :boolean
    add_column :amenity_groups, :fire_extinguisher, :boolean
  end
end
