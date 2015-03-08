class AddCalendarFrequencyToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :calendar_frequency, :string
  end
end
