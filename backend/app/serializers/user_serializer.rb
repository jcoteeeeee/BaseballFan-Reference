class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  # attributes :id, :first_name, :last_name, :username, :email, :password
  # has_many :games
end
