import { Skeleton, TextField } from "@mui/material";
import { useDeferredValue, useEffect } from "react";
import get from 'lodash.get';

export interface FilterProps {
  data: Array<any>,
  isLoading?: boolean;
  searchValue: string;
  onChange: (searchValue: string) => void;
  searchPath: string;
  setFilteredData: (filteredData: Array<any>) => void;
  minSearchLength?: number;
  insensitive?: boolean;
}

const Filter = ({
  data,
  searchValue,
  onChange,
  searchPath,
  minSearchLength = 3,
  isLoading = false,
  setFilteredData,
  insensitive = true
}: FilterProps) => {
  const deferredSearch = useDeferredValue(searchValue);

  const transformCase = (val: string | null) =>  val && insensitive ? val.toLowerCase() : val || '';

  useEffect(() => {
    if (deferredSearch.trim().length >= minSearchLength) {
      setFilteredData(data.filter((elem) => transformCase(get(elem, searchPath)).includes(transformCase(deferredSearch).trim())));
    } else {
      setFilteredData([]);
    }
  }, [deferredSearch]);

  return isLoading ?
    <Skeleton variant="rectangular" height="45px" /> :
    <TextField value={searchValue} fullWidth onChange={(event) => onChange(event.target.value)} />
}

export default Filter;
