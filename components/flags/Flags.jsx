export function VipPriceFlag({ isVipPrice }) {
  return isVipPrice ? (
    <div className="flag d-caption-emphasized t-eezee-blue-dark bg-eezee-blue-light">
      VIP Price
    </div>
  ) : (
    <></>
  );
}

export function BulkDiscountFlag({ isBulkDiscount }) {
  return isBulkDiscount ? (
    <div className="flag d-caption-emphasized t-eezee-yellow-dark bg-eezee-yellow-light">
      Bulk Discount
    </div>
  ) : (
    <></>
  );
}

export function MoqFlag({ moqNumber }) {
  return moqNumber > 0 ? (
    <div className="flag d-caption-emphasized t-grey-base bg-background">
      MOQ: {moqNumber}
    </div>
  ) : (
    <></>
  );
}
