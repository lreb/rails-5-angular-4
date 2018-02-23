class AccountController < ApplicationController
  skip_before_action :authenticate_request, :only => [:create]
  
  def create
      if((UserAccount.find_by email: user_params[:email]) != nil)
        render json: { status: 'The email is already in use' }, status: :bad_request
      else
      user = UserAccount.new(user_params)
        if user.save
          #SessionsController.create(user_params[:email],user_params[:password])
          
          #UserMailer.registration_confirmation(user).deliver
          render json: {status: 'User created successfully'}, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :bad_request
        end
      end
  end

  private

	def user_params
	  params.permit(:email, :password, :password_confirmation)
	end
end
