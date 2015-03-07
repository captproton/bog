class AddPubdateToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :pubdate, :datetime
  end
end
