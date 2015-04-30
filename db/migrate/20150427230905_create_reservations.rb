class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.date :checkin
      t.date :checkout
      t.integer :number_of_guests
      t.integer :space_id
      t.integer :traveler_id

      t.timestamps null: false
    end
  end
end
