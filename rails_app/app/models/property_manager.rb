class Propertymanager < ApplicationRecord
    belongs_to :user
    has_many :landlords
    has_many :props, through: :landlords
    validates :name, presence: true
end