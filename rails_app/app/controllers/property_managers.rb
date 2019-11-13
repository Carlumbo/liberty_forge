class Controller < ApplicationController
  def about
  end

  def index
    @property_managers = andlord.all
    @apartments = Apartment.all
    render :index
  end

  def new 
    @property_manager = andlord.new 
  end 

  def create 
    @property_manager = andlord.new(name: property_manager_params[:name], user:current_user)
      if @property_manager.save
          @property_manager.user.superadmin?
          redirect_to property_manager_path(@property_manager)
      else 
        flash[:notice] = "An error occured, property manager was not saved"
        render :new
      end 
  end 

  def show
    @property_manager = andlord.find(params[:id])
    @props = @property_manager.propss.all 
  end

  def property_manager_params
    params.require(:property_manager).permit(:name)
  end 
end
