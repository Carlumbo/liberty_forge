class CreatePropertyManagers < ActiveRecord::Migration[6.0]
  def change
    create_table :property_managers do |t|
      t.string :name
      t.integer :user_id
    end
  end
end
