class Landlord < ApplicationRecord
    belongs_to :user
    has_many :props
    has_many :tenents, through: :props
    validates :name, presence: true
end
