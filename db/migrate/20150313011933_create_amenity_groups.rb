class CreateAmenityGroups < ActiveRecord::Migration
  def change
    create_table :amenity_groups do |t|
      t.integer :space_id
      t.boolean :essentials
      t.boolean :tv
      t.boolean :cable_tv
      t.boolean :air_condition
      t.boolean :heating
      t.boolean :kitchen
      t.boolean :internet
      t.boolean :wireless_internet

      t.timestamps null: false
    end
  end
end
