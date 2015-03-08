class AddLocationToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :country_code, :string
    add_column :spaces, :street_address, :text
    add_column :spaces, :apt_ste_bld, :string
    add_column :spaces, :city, :string
    add_column :spaces, :state, :string
    add_column :spaces, :postal_code, :string
  end
end
