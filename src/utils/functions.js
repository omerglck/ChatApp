const setAvatarText = (firstname, lastname) => {
    const firstNameControl = firstname ? firstname.charAt(0).toUpperCase() : '';
    const lastNameControl = lastname ? lastname.charAt(0).toUpperCase() : '';
    return `${firstNameControl}${lastNameControl}`;
};
export {setAvatarText}