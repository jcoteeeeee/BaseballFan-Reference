class SessionsController < ApplicationController  
def signup
    user = User.new(first_name: params[:first_name], last_name: params[:last_name], fav_team: params[:fav_team], username: params[:username], email: params[:email], password: params[:password])

    # if user is saved
    if user.save
      # we encrypt user info using the pre-define methods in application controller
      token = encode_user_data({ user_data: user.id })

      # return to user
      render json: { token: token }
    else
      # render error message
      render json: { message: "invalid credentials" }
    end 
    pp 'sessions_user'
    pp user 
  end

  def login
    user = User.find_by(email: params[:email], password: params[:password])

    # you can use bcrypt to password authentication
    if user && user.password === params[:password]

      # we encrypt user info using the pre-define methods in application controller
      token = encode_user_data({ user_data: user.id })

      # return to user
      render json: { token: token }
    else
      render json: { message: "invalid credentials" }
    end
  end
 
end
