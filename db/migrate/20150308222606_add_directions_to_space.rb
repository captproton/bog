class AddDirectionsToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :directions, :text
  end
end
