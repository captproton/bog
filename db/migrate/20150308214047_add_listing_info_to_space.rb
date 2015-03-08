class AddListingInfoToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :home_style,      :string
    add_column :spaces, :room_style,      :string
    add_column :spaces, :person_capacity, :integer
  end
end
