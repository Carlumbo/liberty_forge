class CreateLandlords < ActiveRecord::Migration[6.0]
  def change
    create_table :landlords do |t|
      t.string :name
      t.integer :user_id
      #t.interger :property_manager_id

      t.timestamps
    end
  end
end
