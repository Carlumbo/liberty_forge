class Tenant < ApplicationRecord
    belongs_to :landord
    belongs_to :property_manager
end
