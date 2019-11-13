class CreateProps < ActiveRecord::Migration[6.0]
    def change 
        create_table :props do |t|
            t.string :name 
            t.string :address 
            t.string :structure
            t.integer :landlord_id

            t.timestamps
        end 
    end 
end 