class CreateTenants < ActiveRecord::Migration[6.0]
  def change
    create_table :tenants do |t|
      t.string :name
      t.integer :user_id
      #t.integer :landlord_id

      t.timestamps
    end
  end
end
