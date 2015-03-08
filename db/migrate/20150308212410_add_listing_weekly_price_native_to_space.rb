class AddListingWeeklyPriceNativeToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :listing_weekly_price_native, :integer
  end
end
