class LandlordsController < ApplicationController
  def about
  end

  def index
    @landlords = Landlord.all
    @props = Prop.all
    render :index
  end

  def new 
    @landlord = Landlord.new 
  end 

  def create 
    @landlord = Landlord.new(name: landlord_params[:name], user:current_user)
  
      if @landlord.save
        @landlord.user.admin?
          redirect_to landlord_path(@landlord)
      else 
        flash[:notice] = "An error occured, landlord was not saved"
        render :new
      end 
  end 

  def show
    @landlord = Landlord.find(params[:id])
    @props = @landlord.props.all 
  end 

  def destroy
  @landlord = Landlord.find(params[:id])
  @landlord.destroy
    redirect_to landlord_index_path
  end 


  def update
    @landlord.update(landlord_params)
      redirect_to landlord_path(@landlord)
  end 


  private

  def landlord_params
    params.require(:landlord).permit(:name)
  end 
end
