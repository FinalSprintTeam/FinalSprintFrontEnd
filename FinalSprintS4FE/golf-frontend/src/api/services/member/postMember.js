import { API_ENDPOINT } from "../../connection/server";

const postMember = async (member, address, memberType) => {
  const resAddress = await fetch(API_ENDPOINT + "/api/address/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(address),
  });
  const addressData = await resAddress.json();
  console.log(addressData);

  // const res = await fetch(
  //   API_ENDPOINT +
  //     `/api/member/new?addressID=${addressData}&typeName=${memberType}`,
  //   {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(member),
  //   }
  // );
  // const data = await res.json();
  // return data;
};
export { postMember };
