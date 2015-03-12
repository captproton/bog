class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.string :image
      t.boolean :image_processed

      t.timestamps null: false
    end
  end
end
