class AddExtraFeesToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :cleaning_fee, :boolean
    add_column :spaces, :security_deposit, :boolean
    add_column :spaces, :addl_guest_fee, :boolean
  end
end
