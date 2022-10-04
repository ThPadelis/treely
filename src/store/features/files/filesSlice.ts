import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UploadableFile } from "../../../interfaces/UploadableFile";

export interface FilesState {
  files: UploadableFile[] | [];
  selectedFile: UploadableFile | null;
}

const initialState: FilesState = {
  files: [],
  selectedFile: null,
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<UploadableFile[]>) => {
      state.files = [...state.files, ...action.payload];
    },
    setSelected: (state, action: PayloadAction<UploadableFile>) => {
      state.selectedFile = action.payload;
    },
    cleanFiles: (state) => {
      state.files = [];
      state.selectedFile = null;
    },
  },
});

export const { setSelected, setFiles, cleanFiles } = filesSlice.actions;

export default filesSlice.reducer;
