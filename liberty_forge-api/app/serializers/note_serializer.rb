class Note_Serializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :id
  belongs_to :user
end
