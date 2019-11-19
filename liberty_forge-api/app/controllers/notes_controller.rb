class NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  # GET /notes
  def index
    render json: note_json(Note.all)
  end

  def show
    render json: @note
  end

  # POST /notes
  def create
    user = User.find_or_create_by(user_params)
    note = user.notes.build(note_params)
  
    if note.save
      render json: note_json(note)
    else
      render json: {error: note.errors.full_messages}
        end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  def destroy(note)
    note.destroy
    byebug
  end

  private
   
    def note_json(note)
      note.to_json(
        only:[:title, :content, :id],
        include:{ user: {only: [:name, :id]}}
      )
    end 

    def note_params
      params.require(:note).permit(:title, :content)
    end

    def user_params
      params.require(:user).permit(:name)
    end 

end
