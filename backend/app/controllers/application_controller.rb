class ApplicationController < ActionController::API  
include ActionController::Cookies 
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found 
rescue from ActiveRecord::RecordInvalid, with: :invalid_record 

    private 

    def current_user 
        User.findby(id: session[:user_id])  
    end 
    
end
