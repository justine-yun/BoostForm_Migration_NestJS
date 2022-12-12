import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question_id: {
    type: Number,
    required: true,
  },
  page: {
    type: Number,
  },
  type: {
    type: String,
    required: true,
    enum: ["checkbox", "multiple", "paragraph"],
  },
  title: {
    type: String,
    default: "제목 없음",
  },
  option: {
    type: [String],
  },
  essential: {
    type: Boolean,
    default: false,
  },
  etc_added: {
    type: Boolean,
    default: false,
  },
});

const FormSchema = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: "제목 없음",
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    question_list: {
      type: [QuestionSchema],
    },
    accept_response: {
      type: Boolean,
      default: false,
    },
    on_board: {
      type: Boolean,
      default: false,
    },
    login_required: {
      type: Boolean,
      default: false,
    },
    response_modifiable: {
      type: Boolean,
      default: true,
    },
    response_count: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export { QuestionSchema, FormSchema };
