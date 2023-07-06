export function formDataFormatter(
  data: FormData | any[],
): { [key: string]: any }[] {
  const dataArray: { [key: string]: any }[] = [];

  if (data instanceof FormData) {
    data.forEach((value: any, name: any) => {
      dataArray.push({ [name]: value });
    });
  } else if (Array.isArray(data)) {
    data.forEach((item) => {
      dataArray.push(item);
    });
  }

  return dataArray;
}
