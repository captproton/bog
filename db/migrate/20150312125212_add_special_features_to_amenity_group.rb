class AddSpecialFeaturesToAmenityGroup < ActiveRecord::Migration
  def change
    add_column :amenity_groups, :family_kid_friendly, :boolean
    add_column :amenity_groups, :smoking_allowed, :boolean
    add_column :amenity_groups, :suitable_for_events, :boolean
    add_column :amenity_groups, :pets_allowed, :boolean
    add_column :amenity_groups, :pets_live_on_property, :boolean
    add_column :amenity_groups, :dog, :boolean
    add_column :amenity_groups, :cat, :boolean
    add_column :amenity_groups, :other_pet, :boolean
    add_column :amenity_groups, :wheelchair_accessible, :boolean
  end
end
