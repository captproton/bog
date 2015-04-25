class AddPricingToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :listing_nightly_price, :integer
    add_column :spaces, :listing_monthly_price, :integer
  end
end
