class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :fav_team, :username, :email 
  # has_many :games 
end
