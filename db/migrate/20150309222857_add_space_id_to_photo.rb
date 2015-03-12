class AddSpaceIdToPhoto < ActiveRecord::Migration
  def change
    add_column :photos, :space_id, :integer
  end
end
