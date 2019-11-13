class PropsController < ApplicationController
 

  def new 
     @landlord = Landlord.find(params[:landlord_id])
     @prop = Prop.new 
    
     @url = new_landlord_prop_path(@landlord)
     
  end
  
  def create
    @landlord = Landlord.find(params[:id])
    @prop = @landlord.props.build
    @prop.update_attributes(prop_params)
    if @prop.save 
      binding.pry
          redirect_to landlord_prop_path(@prop.landlord, @prop)
                      
    else 
          flash[:notice] = "This property could not be saved"
          redirect_to new_landlord_prop_path(@landlord)
    end 
  end 

  def update 
   # binding.pry
    @url = landlord_prop_path 

    @prop= Prop.find(params[:id])
    @prop.update_attributes(prop_params)
    binding.pry
    
    if @prop.save 
      flash[:notice] = "The property has been saved!"
      #binding.pry
         redirect_to landlord_path(@prop.landlord, @prop)
    else 
      flash[:notice] = "The property could not be saved"
      render :show
    end 
  end 

  def show 
    @prop = Prop.find(params[:id])
    @url = landlord_prop_path
=begin if @prop.floor_plans.size < @prop.num_of_floor_plans
        new_floor_plan_forms = @prop.num_of_floor_plans - @prop.floor_plans.size
        new_floor_plan_forms.times { @prop.floor_plans.build}
    end 
=end
  end 

  private 

  def prop_params 
    params.require(:prop).permit(:name, :address, :structure, :landlord_id )
  end 
end
