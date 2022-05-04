import { IParticipant, IPrintValues } from "../../interface/IModel";

export function formatValues(values: IPrintValues) {
  // console.log(values)
  // console.log(values.value-values.count);
}

export function PrepareResponseData_Participants(data: any[]): IParticipant[] {
  const info: IParticipant[] = [];
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    console.log(JSON.parse(data[i]));
    info.push(JSON.parse(data[i]));
  }

  return info;
}

export function InitValues(values: IPrintValues, len: number): IPrintValues {
  return {
    ...values,
    total: len,
    start: values.start,
    end: values.end === 0 ? (len > 4 ? 4 : len) : values.end,
  };
}

export function handleIncrement(
  values: IPrintValues,
  len: number
): IPrintValues {
  const data: IPrintValues = {
    ...values,
    total: len,
    start:
      values.end !== values.total ? values.start + values.count : values.start,
    end:
      values.end !== values.total
        ? len - values.end > 4
          ? values.end + values.count
          : values.end + (len - values.end)
        : values.end,
  };
  return data;
}

export function handleDecrement(
  values: IPrintValues,
  len: number
): IPrintValues {
  const data: IPrintValues = {
    ...values,
    total: len,
    start:
      values.end - values.start !== 0
        ? values.start > values.count
          ? values.start - values.count
          : values.start - values.start
        : values.start,
    end:
      values.end - values.start !== 0
        ? values.end !== values.count
          ? values.end - values.count
          : values.end
        : values.end,
  };
  return data;
}
