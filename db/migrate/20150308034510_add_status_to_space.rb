class AddStatusToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :status, :string
  end
end
