class Prop < ApplicationRecord 
    belongs_to :landlord
    validates :name, presence:  true 

end 