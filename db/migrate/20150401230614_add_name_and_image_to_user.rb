class AddNameAndImageToUser < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :image, :text
  end
end
