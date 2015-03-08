class AddRoomsAndBedsToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :bedrooms, :integer
    add_column :spaces, :beds, :integer
    add_column :spaces, :bathrooms, :integer
    add_column :spaces, :bed_style, :string
  end
end
